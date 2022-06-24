package team29.hoorry.issuetracker.core.milestone.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Entity
public class Milestone {

	@Id
	@Column(name = "milestone_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	private String description;
	private LocalDateTime dueDate;

	public static Milestone of(Long id, String title, String description, LocalDateTime dueDate) {
		return new Milestone(id, title, description, dueDate);
	}
}
