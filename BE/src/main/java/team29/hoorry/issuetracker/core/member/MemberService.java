package team29.hoorry.issuetracker.core.member;

import io.jsonwebtoken.JwtException;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.exception.EmptyTokenException;
import team29.hoorry.issuetracker.core.exception.ExceptionMessage;
import team29.hoorry.issuetracker.core.jwt.AccessToken;
import team29.hoorry.issuetracker.core.jwt.JwtConst;
import team29.hoorry.issuetracker.core.jwt.JwtGenerator;
import team29.hoorry.issuetracker.core.jwt.JwtParser;
import team29.hoorry.issuetracker.core.jwt.JwtRepository;
import team29.hoorry.issuetracker.core.jwt.JwtValidator;
import team29.hoorry.issuetracker.core.jwt.RefreshToken;
import team29.hoorry.issuetracker.core.jwt.dto.JwtResponse;
import team29.hoorry.issuetracker.core.member.domain.Member;
import team29.hoorry.issuetracker.core.member.dto.MemberRequest;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;
import team29.hoorry.issuetracker.core.member.dto.MembersResponse;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

	private final MemberRepository memberRepository;
	private final JwtRepository jwtRepository;
	private final JwtValidator jwtValidator;

	public MembersResponse findAll() {
		List<Member> members = memberRepository.findAll();
		List<MemberResponse> memberResponses = members.stream()
			.map(MemberResponse::from)
			.collect(Collectors.toList());
		return new MembersResponse(memberResponses);
	}

	public JwtResponse join(MemberRequest memberRequest) {
		Member member = MemberRequest.toEntity(memberRequest);
		memberRepository.save(member);

		AccessToken accessToken = JwtGenerator.generateAccessToken(member.getId());
		RefreshToken refreshToken = JwtGenerator.generateRefreshToken(member.getId());

		//todo 나중에 레디스에 저장하면서 expired 시간 정해주어야 함
		jwtRepository.save(refreshToken);

		return new JwtResponse(accessToken, refreshToken);
	}

	public JwtResponse reIssue(HttpServletRequest request) {
		String bearerAuthorization = request.getHeader(JwtConst.AUTHORIZATION);

		//todo 에러 메시지 전역적으로 관리해야 함!!! interceptor 에도 동일 메시지 있음!!!!!
		if (bearerAuthorization == null) {
			throw new EmptyTokenException(ExceptionMessage.NO_TOKEN_MESSAGE);
		}

		if (!jwtValidator.validate(bearerAuthorization)) {
			throw new JwtException(ExceptionMessage.INVALID_TOKEN_MESSAGE);
		}

		Long memberId = JwtParser.parseClaim(bearerAuthorization, "memberId", Long.class);
		AccessToken accessToken = JwtGenerator.generateAccessToken(memberId);
		RefreshToken refreshToken = JwtGenerator.generateRefreshToken(memberId);

		//todo 나중에 레디스에 저장하면서 expired 시간 정해주어야 함
		jwtRepository.save(refreshToken);

		return new JwtResponse(accessToken, refreshToken);
	}
}
