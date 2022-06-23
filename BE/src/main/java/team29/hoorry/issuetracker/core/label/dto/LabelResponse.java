package team29.hoorry.issuetracker.core.label.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class LabelResponse {

	private Long id;
	private String title;
	private String titleColor;
	private String backgroundColor;
	private String description;

	public static LabelResponse from(Label label) {
		return new LabelResponse(
			label.getId(),
			label.getTitle(),
			label.getTitleColor(),
			label.getBackgroundColor(),
			label.getDescription()
		);
	}

	public static LabelResponse of(Long id, String title, String titleColor, String backgroundColor,
		String description) {
		return new LabelResponse(id, title, titleColor, backgroundColor, description);
	}
}
