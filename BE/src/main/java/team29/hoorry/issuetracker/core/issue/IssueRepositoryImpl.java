package team29.hoorry.issuetracker.core.issue;

import static team29.hoorry.issuetracker.core.issue.domain.QComment.comment;
import static team29.hoorry.issuetracker.core.issue.domain.QIssue.issue;
import static team29.hoorry.issuetracker.core.issue.domain.QIssueAssignee.issueAssignee;
import static team29.hoorry.issuetracker.core.issue.domain.QIssueLabel.issueLabel;
import static team29.hoorry.issuetracker.core.label.domain.QLabel.label;
import static team29.hoorry.issuetracker.core.member.domain.QMember.member;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.EnumPath;
import com.querydsl.core.types.dsl.StringPath;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import team29.hoorry.issuetracker.core.issue.domain.Issue;
import team29.hoorry.issuetracker.core.issue.domain.Status;
import team29.hoorry.issuetracker.core.issue.dto.IssueFilter;

@RequiredArgsConstructor
public class IssueRepositoryImpl implements IssueCustomRepository {

	private final JPAQueryFactory queryFactory;

	// searchParam filter는 엘라스틱서치로?
	// 엘라스틱 서치 안하면
	// innerJoin으로 comment, -> like로 비교
	@Override
	public Page<Issue> findAllByIssueFilter(IssueFilter issueFilter, Pageable pageable) {

		List<Issue> issues = queryFactory.selectDistinct(issue)
			.from(issue)
			.leftJoin(issue.assignees, issueAssignee)
			.leftJoin(issueAssignee.assignee, member)
			.leftJoin(issue.labels, issueLabel)
			.leftJoin(issueLabel.label, label)
			.leftJoin(issue.comments, comment)
			.where(
				isEquals(issue.status, issueFilter.getStatus()),
				isEquals(issue.writer.name, issueFilter.getWriterName()),
				isEquals(issue.milestone.title, issueFilter.getMilestoneTitle()),
				isAllEquals(issueLabel.label.title, issueFilter.getLabelTitles()),
				isAllEquals(issueAssignee.assignee.name, issueFilter.getAssigneeNames()),
				likeTitleOrComments(issueFilter.getSearchParam())
			)
			.offset(pageable.getOffset())
			.limit(pageable.getPageSize())
			.fetch();

		JPAQuery<Long> countQuery = queryFactory.select(issue.countDistinct())
			.from(issue)
			.leftJoin(issue.assignees, issueAssignee)
			.leftJoin(issue.labels, issueLabel)
			.leftJoin(issue.comments, comment)
			.where(
				isEquals(issue.status, issueFilter.getStatus()),
				isEquals(issue.writer.name, issueFilter.getWriterName()),
				isEquals(issue.milestone.title, issueFilter.getMilestoneTitle()),
				isAllEquals(issueLabel.label.title, issueFilter.getLabelTitles()),
				isAllEquals(issueAssignee.assignee.name, issueFilter.getAssigneeNames()),
				likeTitleOrComments(issueFilter.getSearchParam())
			);

		return PageableExecutionUtils.getPage(issues, pageable, countQuery::fetchOne);
	}

	private BooleanBuilder likeTitleOrComments(String searchParam) {
		if (searchParam == null) {
			return null;
		}
		BooleanBuilder condition = new BooleanBuilder();
		condition.or(issue.title.contains(searchParam));
		condition.or(comment.content.contains(searchParam));
		return condition;
	}

	private BooleanBuilder isAllEquals(StringPath target, List<String> filters) {
		if (filters == null) {
			return null;
		}
		BooleanBuilder condition = new BooleanBuilder();
		for (String filter : filters) {
			condition.and(target.eq(filter));
		}
		return condition;
	}

	private BooleanExpression isEquals(StringPath target, String filter) {
		if (filter == null) {
			return null;
		}
		return target.eq(filter);
	}

	private BooleanExpression isEquals(EnumPath<Status> target, Status filter) {
		if (filter == null) {
			return null;
		}
		return target.eq(filter);
	}

}
