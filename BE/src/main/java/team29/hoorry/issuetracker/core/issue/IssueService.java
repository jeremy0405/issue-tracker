package team29.hoorry.issuetracker.core.issue;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import team29.hoorry.issuetracker.core.common.search.SearchFilter;
import team29.hoorry.issuetracker.core.common.search.SearchParamParser;
import team29.hoorry.issuetracker.core.issue.domain.Issue;
import team29.hoorry.issuetracker.core.issue.domain.IssueAssignee;
import team29.hoorry.issuetracker.core.issue.domain.IssueLabel;
import team29.hoorry.issuetracker.core.issue.domain.Status;
import team29.hoorry.issuetracker.core.issue.dto.IssueFilter;
import team29.hoorry.issuetracker.core.issue.dto.response.CommentResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueLabelResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMilestoneResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssuesResponse;
import team29.hoorry.issuetracker.core.label.LabelRepository;
import team29.hoorry.issuetracker.core.label.domain.Label;
import team29.hoorry.issuetracker.core.member.MemberRepository;
import team29.hoorry.issuetracker.core.member.domain.Member;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;
import team29.hoorry.issuetracker.core.milestone.MilestoneRepository;
import team29.hoorry.issuetracker.core.milestone.domain.Milestone;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class IssueService {

	private static final int PAGE_SIZE = 10;

	private final IssueRepository issueRepository;
	private final MemberRepository memberRepository;
	private final LabelRepository labelRepository;
	private final MilestoneRepository milestoneRepository;

	public IssuesResponse findAll(String query, Integer page) {
		IssueFilter issueFilter = IssueFilter.from(SearchParamParser.parse(query));

		PageRequest pageable = PageRequest.of(page, PAGE_SIZE);
		Page<Issue> issues = issueRepository.findAllByIssueFilter(issueFilter, pageable);
		Page<IssueResponse> issueResponses = issues.map(IssueResponse::new);

		List<Member> members = memberRepository.findAll();
		List<Label> labels = labelRepository.findAll();
		List<Milestone> milestones = milestoneRepository.findAll();

		Long openIssueCount = issueRepository.countFilteredIssues(issueFilter, Status.OPEN);
		Long closedIssueCount = issueRepository.countFilteredIssues(issueFilter, Status.CLOSED);
		Long labelCount = (long) labels.size();
		Long milestoneCount = (long) milestones.size();

		List<IssueLabelResponse> issueLabelResponses = labels.stream()
			.map(IssueLabelResponse::from)
			.collect(Collectors.toList());

		List<IssueMilestoneResponse> issueMilestoneResponses = milestoneRepository.findAllWithRelatedIssueStatusCount();

		List<MemberResponse> memberResponses = members.stream()
			.map(MemberResponse::from)
			.collect(Collectors.toList());

		return new IssuesResponse(openIssueCount, closedIssueCount, labelCount, milestoneCount, memberResponses,
			issueLabelResponses, issueMilestoneResponses, memberResponses, issueResponses);
	}

}
