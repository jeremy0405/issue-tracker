package team29.hoorry.issuetracker.core.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team29.hoorry.issuetracker.core.jwt.dto.JwtResponse;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;

@Getter
@AllArgsConstructor
public class AuthResponse {

	private Boolean isMember;

	private AuthMemberResponse authMemberResponse;

	private MemberResponse memberResponse;

	private JwtResponse jwtResponse;
}
