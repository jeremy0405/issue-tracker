package team29.hoorry.issuetracker.core.issue.dto.response;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class IssueLabelResponse {

	private Long id;
	private String title;
	private String backgroundColor;

	public static IssueLabelResponse from(Label label) {
		return new IssueLabelResponse(
			label.getId(),
			label.getTitle(),
			label.getBackgroundColor()
		);
	}
}
