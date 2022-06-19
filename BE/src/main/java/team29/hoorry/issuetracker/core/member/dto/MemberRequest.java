package team29.hoorry.issuetracker.core.member.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.member.domain.Member;

@Getter
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class MemberRequest {

	private String loginId;

	private String loginPassword;

	private String name;

	private String email;

	private String profileImageUrl;

	private Long oauthId;

	public static Member toEntity(MemberRequest memberRequest) {
		return Member.of(
			memberRequest.loginId,
			memberRequest.loginPassword,
			memberRequest.name,
			memberRequest.email,
			memberRequest.profileImageUrl,
			memberRequest.oauthId
		);
	}
}
