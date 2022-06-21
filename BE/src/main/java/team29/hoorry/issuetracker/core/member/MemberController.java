package team29.hoorry.issuetracker.core.member;


import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.jwt.dto.JwtResponse;
import team29.hoorry.issuetracker.core.member.dto.MemberRequest;
import team29.hoorry.issuetracker.core.member.dto.MembersResponse;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@GetMapping
	public ResponseEntity<MembersResponse> members() {
		MembersResponse membersResponse = memberService.findAll();
		return ResponseEntity.ok(membersResponse);
	}

	@PostMapping
	public ResponseEntity<JwtResponse> join(@RequestBody MemberRequest memberRequest) {
		JwtResponse jwtResponse = memberService.join(memberRequest);
		return ResponseEntity.ok(jwtResponse);
	}

	//todo 리프레쉬 토큰 재발급 받는 로직이 MemberController 에 있는 것이 자연스러운가?
	@GetMapping("/re-issue-token")
	public ResponseEntity<JwtResponse> reIssue(HttpServletRequest request) {
		JwtResponse jwtResponse = memberService.reIssue(request);

		return ResponseEntity.ok(jwtResponse);
	}

}
