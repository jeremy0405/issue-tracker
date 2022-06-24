package team29.hoorry.issuetracker.core.label.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Schema(description = "라벨 수정 요청")
public class LabelUpdateRequest {

	private String title;
	private String titleColor;
	private String backgroundColor;
	private String description;
}
