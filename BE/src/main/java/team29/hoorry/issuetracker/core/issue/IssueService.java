package team29.hoorry.issuetracker.core.issue;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.common.search.SearchParamParser;
import team29.hoorry.issuetracker.core.issue.dto.IssueFilter;
import team29.hoorry.issuetracker.core.issue.dto.response.IssuesResponse;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IssueService {

	public IssuesResponse findAll(String q, Integer page) {
		IssueFilter issueFilter = IssueFilter.from(SearchParamParser.parse(q));
		return null;
	}

}
