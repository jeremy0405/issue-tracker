package team29.hoorry.issuetracker.core.issue;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.common.search.SearchParamParser;
import team29.hoorry.issuetracker.core.issue.domain.Issue;
import team29.hoorry.issuetracker.core.issue.dto.IssueFilter;
import team29.hoorry.issuetracker.core.issue.dto.response.IssuesResponse;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IssueService {

	private static final int PAGE_SIZE = 10;

	private final IssueRepository issueRepository;

	public IssuesResponse findAll(String q, Integer page) {
		IssueFilter issueFilter = IssueFilter.from(SearchParamParser.parse(q));

		PageRequest pageable = PageRequest.of(page, PAGE_SIZE);
		Page<Issue> issues = issueRepository.findAllByIssueFilter(issueFilter, pageable);

		return null;
	}

}
