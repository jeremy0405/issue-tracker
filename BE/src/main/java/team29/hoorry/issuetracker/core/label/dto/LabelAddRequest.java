package team29.hoorry.issuetracker.core.label.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class LabelAddRequest {

	private String title;
	private String titleColor;
	private String backgroundColor;
	private String description;
}
