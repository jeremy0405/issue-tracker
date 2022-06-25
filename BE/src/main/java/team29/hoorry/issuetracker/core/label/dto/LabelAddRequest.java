package team29.hoorry.issuetracker.core.label.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Getter
@NoArgsConstructor
@Schema(description = "라벨 등록 요청")
public class LabelAddRequest {

	@Schema(required = true)
	private String title;

	@Schema(required = true)
	private String titleColor;

	@Schema(required = true)
	private String backgroundColor;

	private String description;

	public Label toEntity() {
		return Label.of(title, titleColor, backgroundColor, description);
	}
}
