package team29.hoorry.issuetracker.core.auth;

import java.nio.charset.StandardCharsets;
import java.util.Collections;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import team29.hoorry.issuetracker.core.auth.dto.AuthMemberResponse;
import team29.hoorry.issuetracker.core.auth.dto.AuthTokenRequest;
import team29.hoorry.issuetracker.core.auth.dto.AuthToken;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	//client에서 깃허브 로그인 누르면 매칭되는 href
	//https://github.com/login/oauth/authorize?client_id=f8e86d7a19896a7f2fd6&scope=user

	@GetMapping
	public ResponseEntity<AuthMemberResponse> publishToken(@RequestParam String code) {
		AuthToken authToken = WebClient.create()
			.post()
			.uri("https://github.com/login/oauth/access_token")
			.headers(header -> {
				header.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
				header.setAcceptCharset(Collections.singletonList(StandardCharsets.UTF_8));
			})
			.bodyValue(AuthTokenRequest.of(code))
			.retrieve()
			.bodyToMono(AuthToken.class)
			.block();

		AuthMemberResponse memberResponse = WebClient.create()
			.get()
			.uri("https://api.github.com/user")
			.headers(header -> header.setBearerAuth(authToken.getAccessToken()))
			.retrieve()
			.bodyToMono(AuthMemberResponse.class)
			.block();

		return ResponseEntity.ok(memberResponse);
	}

}
