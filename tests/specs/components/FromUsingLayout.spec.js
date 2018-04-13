import core from 'coreApi';
import { initializeCore } from '../../utils/helpers';
import 'jasmine-jquery';

describe('Components', () => {
    beforeEach(function() {
        this.rootRegion = initializeCore();
    });

    describe('CodeEditorView', () => {
        it('should initialize', function() {
            this.rootRegion.show(
                new core.layout.Form({
                    model: new Backbone.Model({
                        1: 'bar',
                        2: 123,
                        3: 'foo',
                        4: '2015-07-20T10:46:37Z',
                        5: true,
                        6: 'aaa',
                        7: 456,
                        8: '2015-07-20T10:46:37Z',
                        9: 'dddddddddddddd',
                        10: 789
                    }),
                    schema: [
                        {
                            type: 'v-container',
                            items: [
                                {
                                    type: 'Text-editor',
                                    key: 1
                                },
                                {
                                    type: 'TextArea-editor',
                                    key: 2
                                },
                                {
                                    type: 'Number-editor',
                                    key: 3
                                },
                                {
                                    type: 'DateTime-editor',
                                    key: 4
                                },
                                {
                                    type: 'Boolean-editor',
                                    key: 5,
                                    displayText: 'Make me some tea!'
                                },
                                {
                                    type: 'h-container',
                                    items: [
                                        {
                                            type: 'Text-editor',
                                            key: 6
                                        },
                                        {
                                            type: 'v-container',
                                            items: [
                                                {
                                                    type: 'Number-editor',
                                                    key: 7
                                                },
                                                {
                                                    type: 'DateTime-editor',
                                                    key: 8
                                                }
                                            ]
                                        },
                                        {
                                            type: 'TextArea-editor',
                                            key: 9
                                        },
                                        {
                                            type: 'Number-editor',
                                            key: 10
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                })
            );
            // assert
            expect(true).toBe(true);
        });
    });
});