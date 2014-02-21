package eisviewer

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(EventRequest)
class EventRequestSpec extends Specification {

	EventRequest request;
	
    def setup() {
		log.error "This is a debug message"
		request = new EventRequest();
    }

    def cleanup() {
    }

	@Test
    void "test Initialization"() {
		assertEquals( "2", request.product )
    }
}
