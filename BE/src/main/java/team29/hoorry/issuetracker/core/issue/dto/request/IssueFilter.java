package team29.hoorry.issuetracker.core.issue.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class IssueFilter {

	private String labelIds;
	private String milestoneIds;
	private String assigneeIds;
	private String writerIds;
	private Boolean closed;
	private Boolean open;

}
