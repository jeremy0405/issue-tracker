package team29.hoorry.issuetracker.core.member;

import io.jsonwebtoken.JwtException;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.exception.NullTokenException;
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

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

	private final MemberRepository memberRepository;
	private final JwtRepository jwtRepository;
	private final JwtValidator jwtValidator;

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
			throw new NullTokenException("토큰이 존재하지 않습니다.");
		}

		if (!jwtValidator.validate(bearerAuthorization)) {
			throw new JwtException("토큰이 유효하지 않습니다.");
		}

		Long memberId = JwtParser.parseClaim(bearerAuthorization, "memberId", Long.class);
		AccessToken accessToken = JwtGenerator.generateAccessToken(memberId);
		RefreshToken refreshToken = JwtGenerator.generateRefreshToken(memberId);

		//todo 나중에 레디스에 저장하면서 expired 시간 정해주어야 함
		jwtRepository.save(refreshToken);

		return new JwtResponse(accessToken, refreshToken);
	}
}
