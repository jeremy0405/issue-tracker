package team29.hoorry.issuetracker.core.issue;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueAssigneesUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueLabelsUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueMilestoneUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueStatusUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssueTitleUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssuesSaveRequest;
import team29.hoorry.issuetracker.core.issue.dto.request.IssuesStatusUpdateRequest;
import team29.hoorry.issuetracker.core.issue.dto.response.CommentResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueDetailResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueLabelResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMemberResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMilestoneResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMilestoneSimpleResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.IssuesResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.ReactionResponse;
import team29.hoorry.issuetracker.core.label.domain.Label;

@Slf4j
@Service
public class IssueMockService {

	public Long save(IssuesSaveRequest issuesSaveRequest) {
		log.debug("{}", issuesSaveRequest);

		return null;
	}

	public IssuesResponse findAll(String searchParam, Integer page) {

		List<Label> issueLabels = List.of(
			Label.of(1L, "bug", "#0000FF", "#B9062F", "Something isn't working"),
			Label.of(3L, "duplicate", "#b4b4b4", "#000000",
				"This issue or pull request already exists")
		);

		List<IssueMemberResponse> assignees = List.of(
			new IssueMemberResponse(1L, "jerry",
				"https://post-phinf.pstatic.net/MjAyMTA2MDRfOTAg/MDAxNjIyNzcyMjY1NzQ2.sRxvXF_CKk6NqfiAI6624veOffmu7GDJmXuoMcmgQv0g.ZA1bWEuLFT7--CvzUFZ6TXN2TWX6rhze_t7ilqwk-tcg.JPEG/IMG_3115.jpg?type=w1200")
		);

		IssueMemberResponse writer = new IssueMemberResponse(1L, "jerry",
			"https://post-phinf.pstatic.net/MjAyMTA2MDRfOTAg/MDAxNjIyNzcyMjY1NzQ2.sRxvXF_CKk6NqfiAI6624veOffmu7GDJmXuoMcmgQv0g.ZA1bWEuLFT7--CvzUFZ6TXN2TWX6rhze_t7ilqwk-tcg.JPEG/IMG_3115.jpg?type=w1200");

		List<IssueResponse> issues = List.of(
			new IssueResponse(1L, "OPEN", "골든다람쥐 가기", issueLabels, assignees, "1주차 마일스톤 BE", writer,
				LocalDateTime.now()),
			new IssueResponse(2L, "OPEN", "맛있겠다", issueLabels, assignees, "1주차 마일스톤 BE", writer,
				LocalDateTime.now()),
			new IssueResponse(3L, "CLOSED", "제리 바보 아님", issueLabels, assignees, "1주차 마일스톤 BE",
				writer, LocalDateTime.now()),
			new IssueResponse(4L, "OPEN", "천제리", issueLabels, assignees, "1주차 마일스톤 FE", writer,
				LocalDateTime.now()),
			new IssueResponse(5L, "OPEN", "후 천재", issueLabels, assignees, "1주차 마일스톤 FE", writer,
				LocalDateTime.now())
		);

		List<Label> labels = List.of(
			Label.of(1L, "bug", "#0000FF", "#B9062F", "Something isn't working"),
			Label.of(2L, "documentation", "#0000FF", "#FFFFFF",
				"Improvements or additions to documentation"),
			Label.of(3L, "duplicate", "#b4b4b4", "#000000",
				"This issue or pull request already exists")
		);

		List<IssueLabelResponse> issueLabelResponses = labels.stream().map(IssueLabelResponse::from)
			.collect(Collectors.toList());

		List<IssueMilestoneSimpleResponse> milestones = List.of(
			new IssueMilestoneSimpleResponse(1L, "1주차 마일스톤 BE"),
			new IssueMilestoneSimpleResponse(2L, "1주차 마일스톤 FE"));

		List<IssueMemberResponse> writers = List.of(
			new IssueMemberResponse(1L, "who-hoo",
				"https://avatars.githubusercontent.com/u/68011320?v=4"),
			new IssueMemberResponse(2L, "jeremy0405",
				"https://post-phinf.pstatic.net/MjAyMTA2MDRfOTAg/MDAxNjIyNzcyMjY1NzQ2.sRxvXF_CKk6NqfiAI6624veOffmu7GDJmXuoMcmgQv0g.ZA1bWEuLFT7--CvzUFZ6TXN2TWX6rhze_t7ilqwk-tcg.JPEG/IMG_3115.jpg?type=w1200")
		);

		PageRequest pageable = PageRequest.of(0, 10);

		Page<IssueResponse> pagedIssues = new PageImpl<>(issues, pageable, issues.size());

		return new IssuesResponse(4, 2, labels.size(), milestones.size(), assignees,
			issueLabelResponses, milestones, writers, pagedIssues);
	}

	public IssueDetailResponse findById(Long id) {

		List<Label> labels = List.of(
			Label.of(1L, "bug", "#0000FF", "#B9062F", "Something isn't working"),
			Label.of(2L, "documentation", "#0000FF", "#FFFFFF",
				"Improvements or additions to documentation"),
			Label.of(3L, "duplicate", "#b4b4b4", "#000000",
				"This issue or pull request already exists")
		);

		List<IssueMemberResponse> assignees = List.of(
			new IssueMemberResponse(1L, "jerry",
				"https://post-phinf.pstatic.net/MjAyMTA2MDRfOTAg/MDAxNjIyNzcyMjY1NzQ2.sRxvXF_CKk6NqfiAI6624veOffmu7GDJmXuoMcmgQv0g.ZA1bWEuLFT7--CvzUFZ6TXN2TWX6rhze_t7ilqwk-tcg.JPEG/IMG_3115.jpg?type=w1200")
		);

		IssueMemberResponse writer = new IssueMemberResponse(1L, "who-hoo",
			"https://avatars.githubusercontent.com/u/68011320?v=4");

		IssueMilestoneResponse milestone = new IssueMilestoneResponse(1L, "1주차 마일스톤 BE", 4, 3);

		List<ReactionResponse> reactions = List.of(
			new ReactionResponse("\uD83D\uDC4D", List.of(writer)),
			new ReactionResponse("❤️", List.of(writer)),
			new ReactionResponse("\uD83E\uDD72", List.of(writer))
		);

		List<CommentResponse> comments = List.of(
			new CommentResponse(writer, LocalDateTime.now(), LocalDateTime.now(), "배고프다..",
				reactions),
			new CommentResponse(writer, LocalDateTime.now(), LocalDateTime.now(), "하리보 냠 냠",
				reactions)
		);
		return new IssueDetailResponse(1L, "도비와 도토리와 친해지고 싶은 후", labels, assignees, writer,
			milestone, comments);
	}

	public List<Long> updateAllStatus(IssuesStatusUpdateRequest issuesStatusUpdateRequest) {
		List<IssueStatusUpdateRequest> issueStatusUpdateRequests = issuesStatusUpdateRequest.getIssueStatusUpdateRequests();
		for (IssueStatusUpdateRequest issueStatusUpdateRequest : issueStatusUpdateRequests) {
			log.debug("status id = {}", issueStatusUpdateRequest.getId());
			log.debug("status = {}", issueStatusUpdateRequest.getStatus());
		}
		return Collections.emptyList();
	}

	public Long updateStatus(Long id, IssueStatusUpdateRequest issueStatusUpdateRequest) {
		log.debug("status id = {}", id);
		log.debug("status = {}", issueStatusUpdateRequest.getStatus());
		return id;
	}

	public Long updateTitle(Long id, IssueTitleUpdateRequest issueTitleUpdateRequest) {
		log.debug("status id = {}", id);
		log.debug("title = {}", issueTitleUpdateRequest.getTitle());
		return id;
	}

	public Long updateLabels(Long id, IssueLabelsUpdateRequest issueLabelsUpdateRequest) {
		issueLabelsUpdateRequest.getLabelsId()
			.forEach(labelId -> log.debug("label id = {}", labelId));
		return id;
	}

	public Long updateMilestone(Long id, IssueMilestoneUpdateRequest issueMilestoneUpdateRequest) {
		log.debug("milestone id = {}", issueMilestoneUpdateRequest.getMilestoneId());
		return id;
	}

	public Long updateAssignees(Long id, IssueAssigneesUpdateRequest issueAssigneesUpdateRequest) {
		issueAssigneesUpdateRequest.getAssigneesId()
			.forEach(assigneeId -> log.debug("assignee id = {}", assigneeId));
		return id;
	}

	public Long delete(Long id) {
		log.debug("id = {}", id);
		return id;
	}
}
