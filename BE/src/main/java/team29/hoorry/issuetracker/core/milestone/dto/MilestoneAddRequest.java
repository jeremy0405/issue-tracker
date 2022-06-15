package team29.hoorry.issuetracker.core.milestone.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MilestoneAddRequest {

	private String title;
	private String description;
	@JsonProperty("due_date")
	private LocalDateTime dueDate;

}
