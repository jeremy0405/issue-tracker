package team29.hoorry.issuetracker.core.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team29.hoorry.issuetracker.core.auth.dto.AuthResponse;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

	private final AuthService authService;

	@GetMapping
	public ResponseEntity<AuthResponse> publishToken(@RequestParam String code) {
		AuthResponse authResponse = authService.getAuthUser(code);

		return ResponseEntity.ok(authResponse);
	}

}
