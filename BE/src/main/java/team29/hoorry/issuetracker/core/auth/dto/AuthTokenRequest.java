package team29.hoorry.issuetracker.core.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class AuthTokenRequest {

	private String code;

	@JsonProperty("client_id")
	private String clientId = System.getenv("CLIENT_ID");

	@JsonProperty("client_secret")
	private String clientSecret = System.getenv("CLIENT_SECRET");

	public static AuthTokenRequest of(String code) {
		AuthTokenRequest authTokenRequest = new AuthTokenRequest();
		authTokenRequest.code = code;
		return authTokenRequest;
	}

}
