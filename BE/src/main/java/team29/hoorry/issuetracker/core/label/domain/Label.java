package team29.hoorry.issuetracker.core.label.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Label {

	private Long labelId;
	private String title;
	private String titleColor;
	private String backgroundColor;
	private String description;

	public static Label of(Long labelId, String title, String titleColor, String backgroundColor,
		String description) {
		return new Label(labelId, title, titleColor, backgroundColor, description);
	}
}
