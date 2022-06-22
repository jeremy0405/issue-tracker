package team29.hoorry.issuetracker.core.common.search;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Map;
import org.junit.jupiter.api.Test;
import org.springframework.util.MultiValueMap;

class SearchParamParserTest {

	@Test
	void 만약_입력값이_null이면_빈_MultiValueMap을_반환한다() {
		String q = null;

		MultiValueMap<SearchFilter, String> result = SearchParamParser.parse(q);

		assertThat(result).isEmpty();
	}

	@Test
	void 만약_한가지_속성을_단건_입력하면_하나의_키에_하나의_value를_가진_MultiValueMap을_반환한다() {
		String q = "author%3Ajerry";

		MultiValueMap<SearchFilter, String> result = SearchParamParser.parse(q);

		assertThat(result).hasSize(1);
		assertThat(result).containsExactly(Map.entry(SearchFilter.WRITER_NAME, List.of("jerry")));
	}

	@Test
	void 만약_한가지_속성을_다건_입력하면_하나의_키에_multivalue를_가진_MultiValueMap을_반환한다() {
		String q = "author%3Ajerry+author%3Ahoo";

		MultiValueMap<SearchFilter, String> result = SearchParamParser.parse(q);

		assertThat(result).hasSize(1);
		assertThat(result).containsExactly(Map.entry(SearchFilter.WRITER_NAME, List.of("jerry", "hoo")));
	}

	@Test
	void 만약_여러_속성을_입력하면_여러개의_키를_가진_MultiValueMap을_반환한다() {
		String q = "author%3Ajerry+author%3Ahoo+milestone%3A1주차%20마일스톤";

		MultiValueMap<SearchFilter, String> result = SearchParamParser.parse(q);
		Map<SearchFilter, List<String>> expected = Map.of(
			SearchFilter.WRITER_NAME, List.of("jerry", "hoo"),
			SearchFilter.MILESTONE_NAME, List.of("1주차 마일스톤")
		);

		assertThat(result).containsExactlyInAnyOrderEntriesOf(expected);
	}

	@Test
	void 만약_검색쿼리를_포함한_여러_속성을_입력하면_여러개의_키를_가진_MultiValueMap을_반환한다() {
		String q = "author%3Ajerry+author%3Ahoo+milestone%3A1주차%20마일스톤+검색쿼리";

		MultiValueMap<SearchFilter, String> result = SearchParamParser.parse(q);
		Map<SearchFilter, List<String>> expected = Map.of(
			SearchFilter.WRITER_NAME, List.of("jerry", "hoo"),
			SearchFilter.MILESTONE_NAME, List.of("1주차 마일스톤"),
			SearchFilter.SEARCH_PARAM, List.of("검색쿼리")
		);

		assertThat(result).containsExactlyInAnyOrderEntriesOf(expected);
	}
}
