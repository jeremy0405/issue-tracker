package team29.hoorry.issuetracker.core.issue.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class IssueMemberResponse {

	private Long id;
	private String loginId;
	private String profileImageUrl;

}
