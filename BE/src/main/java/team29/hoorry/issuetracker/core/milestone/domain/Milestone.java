package team29.hoorry.issuetracker.core.milestone.domain;

import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor
public class Milestone {

	private Long id;
	private String title;
	private String description;
	private LocalDateTime dueDate;

	public static Milestone of(Long id, String title, String description, LocalDateTime dueDate) {
		return new Milestone(id, title, description, dueDate);
	}
}
