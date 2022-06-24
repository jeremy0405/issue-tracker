package team29.hoorry.issuetracker.core.issue;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
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
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMilestoneResponse;
import team29.hoorry.issuetracker.core.issue.dto.response.ReactionResponse;
import team29.hoorry.issuetracker.core.label.domain.Label;
import team29.hoorry.issuetracker.core.member.dto.MemberResponse;

@Slf4j
@Service
public class IssueMockService {

	public Long save(IssuesSaveRequest issuesSaveRequest) {
		log.debug("{}", issuesSaveRequest);

		return null;
	}

	public IssueDetailResponse findById(Long id) {

		List<Label> labels = List.of(
			Label.of(1L, "bug", "#0000FF", "#B9062F", "Something isn't working"),
			Label.of(2L, "documentation", "#0000FF", "#FFFFFF",
				"Improvements or additions to documentation"),
			Label.of(3L, "duplicate", "#b4b4b4", "#000000",
				"This issue or pull request already exists")
		);

		List<MemberResponse> assignees = List.of(
			new MemberResponse(1L, "jerry",
				"https://post-phinf.pstatic.net/MjAyMTA2MDRfOTAg/MDAxNjIyNzcyMjY1NzQ2.sRxvXF_CKk6NqfiAI6624veOffmu7GDJmXuoMcmgQv0g.ZA1bWEuLFT7--CvzUFZ6TXN2TWX6rhze_t7ilqwk-tcg.JPEG/IMG_3115.jpg?type=w1200")
		);

		MemberResponse writer = new MemberResponse(1L, "who-hoo",
			"https://avatars.githubusercontent.com/u/68011320?v=4");

		IssueMilestoneResponse milestone = new IssueMilestoneResponse(1L, "1주차 마일스톤 BE", 4L, 3L);

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
