package team29.hoorry.issuetracker.core.issue;

import java.util.ArrayList;
import java.util.NoSuchElementException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team29.hoorry.issuetracker.core.issue.domain.Comment;
import team29.hoorry.issuetracker.core.issue.domain.Issue;
import team29.hoorry.issuetracker.core.issue.dto.request.CommentSaveRequest;
import team29.hoorry.issuetracker.core.member.MemberRepository;
import team29.hoorry.issuetracker.core.member.domain.Member;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentService {

	private final CommentRepository commentRepository;
	private final IssueRepository issueRepository;
	private final MemberRepository memberRepository;

	public Long write(Long issueId, CommentSaveRequest commentSaveRequest) {
		Issue issue = issueRepository.findById(issueId)
			.orElseThrow(() -> new NoSuchElementException("해당 issueId를 가진 이슈는 없습니다."));
		Member writer = memberRepository.findById(commentSaveRequest.getMemberId())
			.orElseThrow(() -> new NoSuchElementException("해당 memberId를 가진 멤버는 없습니다."));
		Comment savedComment = commentRepository.save(Comment.of(issue, writer, commentSaveRequest.getContent(), new ArrayList<>()));
		return savedComment.getId();
	}
}

