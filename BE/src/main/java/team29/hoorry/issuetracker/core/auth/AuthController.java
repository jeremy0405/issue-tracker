package team29.hoorry.issuetracker.core.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.auth.dto.AuthMemberResponse;
import team29.hoorry.issuetracker.core.auth.dto.AuthToken;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

	private final AuthService authService;

	@GetMapping
	public ResponseEntity<AuthMemberResponse> publishToken(@RequestParam String code) {
		AuthToken authToken = authService.publishAuthToken(code);
		AuthMemberResponse authMemberResponse = authService.getAuthUser(authToken);

		return ResponseEntity.ok(authMemberResponse);
	}

}
