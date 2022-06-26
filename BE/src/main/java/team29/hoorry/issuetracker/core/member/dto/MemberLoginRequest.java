package team29.hoorry.issuetracker.core.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberLoginRequest {

	private String loginId;
	private String loginPassword;

}
