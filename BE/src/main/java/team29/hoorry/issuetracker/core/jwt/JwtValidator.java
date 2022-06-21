package team29.hoorry.issuetracker.core.jwt;

import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import team29.hoorry.issuetracker.core.exception.MemberNotFoundException;
import team29.hoorry.issuetracker.core.member.MemberRepository;


@Component
@RequiredArgsConstructor
public class JwtValidator {

	private final MemberRepository memberRepository;

	public boolean validate(String bearerAuthorization) {
		try {
			Long memberId = JwtParser.parseClaim(bearerAuthorization, "memberId", Long.class);
			memberRepository.findById(memberId)
				.orElseThrow(() -> new MemberNotFoundException("해당 memberId를 가진 멤버는 없습니다."));
		} catch (JwtException | IllegalArgumentException e) {
			return false;
		}
		return true;
	}
}
