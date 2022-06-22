package team29.hoorry.issuetracker.core.issue.dto;

import java.util.List;
import java.util.Map.Entry;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.util.MultiValueMap;
import team29.hoorry.issuetracker.core.common.search.SearchFilter;
import team29.hoorry.issuetracker.core.issue.domain.Issue;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@ToString
public class IssueFilter {

	private List<String> labelNames;
	private String milestoneName;
	private List<String> assigneeNames;
	private String writerName;
	private String searchParam;
	private Boolean isClosed;
	private Boolean isOpen;

	public static IssueFilter from(MultiValueMap<SearchFilter, String> filters) {
		IssueFilter issueFilter = new IssueFilter();

		issueFilter.labelNames = filters.get(SearchFilter.LABEL_NAME);
		issueFilter.milestoneName = filters.getFirst(SearchFilter.MILESTONE_NAME);
		issueFilter.assigneeNames = filters.get(SearchFilter.ASSIGNEE_NAME);
		issueFilter.writerName = filters.getFirst(SearchFilter.WRITER_NAME);
		issueFilter.searchParam = filters.getFirst(SearchFilter.SEARCH_PARAM);
		String status = filters.getFirst(SearchFilter.STATUS);
		if ("open".equals(status)) {
			issueFilter.isOpen = true;
		}
		if ("closed".equals(status)) {
			issueFilter.isClosed = true;
		}

		return issueFilter;
	}
}
