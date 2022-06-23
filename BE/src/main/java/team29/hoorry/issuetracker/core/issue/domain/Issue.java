package team29.hoorry.issuetracker.core.issue.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import team29.hoorry.issuetracker.core.common.BaseTimeEntity;
import team29.hoorry.issuetracker.core.member.domain.Member;
import team29.hoorry.issuetracker.core.milestone.domain.Milestone;

@Getter
@NoArgsConstructor
@Entity
public class Issue extends BaseTimeEntity {

	@Id
	@Column(name = "issue_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private Status status;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "writer_id", nullable = false)
	private Member writer;

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Comment> comments = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<IssueAssignee> assignees = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<IssueLabel> labels = new ArrayList<>();

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "milestone_id")
	private Milestone milestone;

}
