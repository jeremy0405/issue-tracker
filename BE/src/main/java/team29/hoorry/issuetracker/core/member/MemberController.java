package team29.hoorry.issuetracker.core.member;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.member.dto.MemberRequest;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@PostMapping
	public ResponseEntity<Long> join(@RequestBody MemberRequest memberRequest) {
		Long memberId = memberService.join(memberRequest);
		// TODO : jwt access_token, refresh_token 응답
		return ResponseEntity.ok(memberId);
	}
}
