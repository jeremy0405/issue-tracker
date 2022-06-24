package team29.hoorry.issuetracker.core.milestone;

import static com.querydsl.jpa.JPAExpressions.select;
import static team29.hoorry.issuetracker.core.issue.domain.QIssue.issue;
import static team29.hoorry.issuetracker.core.milestone.domain.QMilestone.milestone;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;
import team29.hoorry.issuetracker.core.issue.domain.Status;
import team29.hoorry.issuetracker.core.issue.dto.response.IssueMilestoneResponse;
import team29.hoorry.issuetracker.core.milestone.domain.QMilestone;

@RequiredArgsConstructor
public class MilestoneRepositoryImpl implements MilestoneCustomRepository {

	private final JPAQueryFactory queryFactory;

	@Override
	public List<IssueMilestoneResponse> findAllWithRelatedIssueStatusCount() {

		QMilestone m = new QMilestone("m");

		return queryFactory.from(m)
			.select(Projections.constructor(IssueMilestoneResponse.class,
					m.id,
					m.title,
					(select(issue.count())
						.from(issue)
						.innerJoin(milestone)
						.on(issue.milestone.id.eq(milestone.id))
						.where(
							issue.status.eq(Status.OPEN),
							milestone.id.eq(m.id)
						)
					),
					(select(issue.count()))
						.from(issue)
						.innerJoin(milestone)
						.on(issue.milestone.id.eq(milestone.id))
						.where(
							issue.status.eq(Status.CLOSED),
							milestone.id.eq(m.id)
						)
				)
			)
			.fetch();
	}
}
