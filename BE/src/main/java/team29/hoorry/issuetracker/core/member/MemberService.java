package team29.hoorry.issuetracker.core.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.jwt.AccessToken;
import team29.hoorry.issuetracker.core.jwt.JwtGenerator;
import team29.hoorry.issuetracker.core.jwt.JwtRepository;
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

	public JwtResponse join(MemberRequest memberRequest) {
		Member member = MemberRequest.toEntity(memberRequest);
		memberRepository.save(member);

		AccessToken accessToken = JwtGenerator.generateAccessToken(member.getId());
		RefreshToken refreshToken = JwtGenerator.generateRefreshToken(member.getId());

		jwtRepository.save(refreshToken);

		return new JwtResponse(accessToken, refreshToken);
	}
}
