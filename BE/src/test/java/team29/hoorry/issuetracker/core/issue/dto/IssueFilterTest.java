package team29.hoorry.issuetracker.core.issue.dto;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.util.MultiValueMap;
import team29.hoorry.issuetracker.core.common.search.SearchFilter;
import team29.hoorry.issuetracker.core.common.search.SearchParamParser;

class IssueFilterTest {

	// issue filter property name
	static final String assigneeNames = "assigneeNames";
	static final String milestoneName = "milestoneName";
	static final String isOpen = "isOpen";

	@Test
	void 만약_from_메서드에_빈_MultiValueMap을_입력받으면_모든_필드가_null인_객체를_반환한다() {
		String q = null;
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result).hasAllNullFieldsOrProperties();
	}

	@Test
	void 만약_from_메서드에_assignee_키에_jerry_value를_가진_MultiValueMap을_입력받으면_assigneeNames_필드가_jerry인_리스트_객체를_반환한다() {
		String q = "assignee%3Ajerry";
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result)
			.hasFieldOrPropertyWithValue(assigneeNames, List.of("jerry"))
			.hasAllNullFieldsOrPropertiesExcept(assigneeNames);
	}

	@Test
	void 만약_from_메서드에_assignee_키에_여러_value를_가진_MultiValueMap을_입력받으면_assigneeNames_필드가_여러개인_리스트_객체를_반환한다() {
		String q = "assignee%3Ajerry+assignee%3Ahoo";
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result)
			.hasFieldOrPropertyWithValue(assigneeNames, List.of("jerry", "hoo"))
			.hasAllNullFieldsOrPropertiesExcept(assigneeNames);
	}

	@Test
	void 만약_from_메서드에_assignee_키에_하나의_value를_가진_MultiValueMap을_입력받으면_milestoneName_필드가_한개인_객체를_반환한다() {
		String q = "milestone%3Ajerry";
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result)
			.hasFieldOrPropertyWithValue(milestoneName, "jerry")
			.hasAllNullFieldsOrPropertiesExcept(milestoneName);
	}

	@Test
	void 만약_from_메서드에_milestone_키에_여러_value를_가진_MultiValueMap을_입력받으면_milestoneName_필드가_먼저입력된_값을_가진_객체를_반환한다() {
		String q = "milestone%3Ahoo+milestone%3Ajerry";
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result)
			.hasFieldOrPropertyWithValue(milestoneName, "hoo")
			.hasAllNullFieldsOrPropertiesExcept(milestoneName);
	}

	@Test
	void 만약_from_메서드에_is_키에_open을_가진_MultiValueMap을_입력받으면_isOpen_필드가_true인_객체를_반환한다() {
		String q = "is%3Aopen";
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result)
			.hasFieldOrPropertyWithValue(isOpen, true)
			.hasAllNullFieldsOrPropertiesExcept(isOpen);
	}

	@Test
	void 만약_from_메서드에_is_키에_여러_open과_closed를_모두_가진_MultiValueMap을_입력받으면_먼저_입력된_속성이_true인_객체를_반환한다() {
		String q = "is%3Aopen+is%3Aclosed";
		MultiValueMap<SearchFilter, String> input = SearchParamParser.parse(q);

		IssueFilter result = IssueFilter.from(input);

		assertThat(result)
			.hasFieldOrPropertyWithValue(isOpen, true)
			.hasAllNullFieldsOrPropertiesExcept(isOpen);
	}
}
