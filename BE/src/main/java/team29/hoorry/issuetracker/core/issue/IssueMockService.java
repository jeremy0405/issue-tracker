package team29.hoorry.issuetracker.core.issue;

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

@Slf4j
@Service
public class IssueMockService {

	public Long save(IssuesSaveRequest issuesSaveRequest) {
		log.debug("{}", issuesSaveRequest);

		return null;
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
