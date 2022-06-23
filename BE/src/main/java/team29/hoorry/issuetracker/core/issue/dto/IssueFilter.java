package team29.hoorry.issuetracker.core.issue.dto;

import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.util.MultiValueMap;
import team29.hoorry.issuetracker.core.common.search.SearchFilter;
import team29.hoorry.issuetracker.core.issue.domain.Status;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
public class IssueFilter {

	private List<String> labelTitles;
	private String milestoneTitle;
	private List<String> assigneeNames;
	private String writerName;
	private String searchParam;
	private Status status;

	public static IssueFilter from(MultiValueMap<SearchFilter, String> filters) {
		IssueFilter issueFilter = new IssueFilter();

		issueFilter.labelTitles = filters.get(SearchFilter.LABEL_TITLE);
		issueFilter.milestoneTitle = filters.getFirst(SearchFilter.MILESTONE_TITLE);
		issueFilter.assigneeNames = filters.get(SearchFilter.ASSIGNEE_NAME);
		issueFilter.writerName = filters.getFirst(SearchFilter.WRITER_NAME);
		issueFilter.searchParam = filters.getFirst(SearchFilter.SEARCH_PARAM);
		String status = filters.getFirst(SearchFilter.STATUS);
		if ("open".equals(status)) {
			issueFilter.status= Status.OPEN;
		}
		if ("closed".equals(status)) {
			issueFilter.status = Status.CLOSED;
		}

		return issueFilter;
	}
}
