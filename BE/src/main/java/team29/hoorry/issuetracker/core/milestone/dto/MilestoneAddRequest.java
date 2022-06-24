package team29.hoorry.issuetracker.core.milestone.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Schema(description = "마일스톤 등록 요청")
public class MilestoneAddRequest {

	@Schema(required = true)
	private String title;
	private String description;
	@JsonProperty("due_date")
	private LocalDateTime dueDate;

}
