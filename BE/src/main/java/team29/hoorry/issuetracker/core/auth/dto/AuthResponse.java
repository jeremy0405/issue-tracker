package team29.hoorry.issuetracker.core.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team29.hoorry.issuetracker.core.jwt.dto.JwtResponse;

@Getter
@AllArgsConstructor
public class AuthResponse {

	private Boolean isMember;

	private AuthMemberResponse authMemberResponse;

	private JwtResponse jwtResponse;
}
