package team29.hoorry.issuetracker.core.jwt.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.jwt.JwtGenerator;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {

	private String accessToken;

	private String refreshToken;

	public JwtResponse(Long memberId) {
		createResponse(memberId);
	}

	public void createResponse(Long memberId) {
		this.accessToken = JwtGenerator.generateAccessToken(memberId).getToken();
		this.refreshToken = JwtGenerator.generateRefreshToken(memberId).getToken();
	}
}
