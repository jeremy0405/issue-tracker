package team29.hoorry.issuetracker.core.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.jwt.AccessToken;
import team29.hoorry.issuetracker.core.jwt.JwtGenerator;
import team29.hoorry.issuetracker.core.jwt.RefreshToken;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {

	private String accessToken;

	private String refreshToken;

	public JwtResponse(AccessToken accessToken, RefreshToken refreshToken) {
		this.accessToken = accessToken.getToken();
		this.refreshToken = refreshToken.getToken();
	}
}
