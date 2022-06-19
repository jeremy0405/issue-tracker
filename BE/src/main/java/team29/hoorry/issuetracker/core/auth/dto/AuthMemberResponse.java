package team29.hoorry.issuetracker.core.auth.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthMemberResponse {

	@JsonProperty("id")
	private Long authId;

	private String name;

	private String email;

	@JsonProperty("avatar_url")
	private String profileImageUrl;

}
