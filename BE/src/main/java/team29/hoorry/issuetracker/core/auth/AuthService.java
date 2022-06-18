package team29.hoorry.issuetracker.core.auth;

import java.nio.charset.StandardCharsets;
import java.util.Collections;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import team29.hoorry.issuetracker.core.auth.dto.AuthMemberResponse;
import team29.hoorry.issuetracker.core.auth.dto.AuthToken;
import team29.hoorry.issuetracker.core.auth.dto.AuthTokenRequest;

@Service
public class AuthService {

	public AuthToken publishAuthToken(String code) {
		return WebClient.create()
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
	}

	public AuthMemberResponse getAuthUser(AuthToken authToken) {
		return WebClient.create()
			.get()
			.uri("https://api.github.com/user")
			.headers(header -> header.setBearerAuth(authToken.getAccessToken()))
			.retrieve()
			.bodyToMono(AuthMemberResponse.class)
			.block();
	}
}
