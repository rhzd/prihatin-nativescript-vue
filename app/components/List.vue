<template>
    <TabView @selectedIndexChange="indexChange" :flat="flat" class="tab-view">
        <TabViewItem title="Cloth">
            <PullToRefresh @refresh="refreshList">
                    <ListView class="zk" for="item in listOfItems">
                        <v-template height="100">
                            <!-- Shows the list item label in the default color and style. -->
                            <Label :text="item.text" />
                        </v-template>
                    </ListView>
            </PullToRefresh>
        </TabViewItem>
        <TabViewItem title="Home">
            <PullToRefresh @refresh="refreshList">
                <ScrollView>
                    <AbsoluteLayout backgroundColor="#FFFFFF">
                        <Label left="10" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="10" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                    </AbsoluteLayout>
                </ScrollView>
            </PullToRefresh>
        </TabViewItem>
        <TabViewItem title="Furniture">
            <PullToRefresh @refresh="refreshList">
                <ScrollView>
                    <AbsoluteLayout backgroundColor="#FFFFFF">
                        <Label left="10" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="10" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                    </AbsoluteLayout>
                </ScrollView>
            </PullToRefresh>
        </TabViewItem>
        <TabViewItem title="Food">
            <PullToRefresh @refresh="refreshList">
                <ScrollView>
                    <AbsoluteLayout backgroundColor="#FFFFFF">
                        <Label left="10" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="10" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                    </AbsoluteLayout>
                </ScrollView>
            </PullToRefresh>
        </TabViewItem>
        <TabViewItem title="Health">
            <PullToRefresh @refresh="refreshList">
                <ScrollView>
                    <AbsoluteLayout backgroundColor="#FFFFFF">
                        <Label left="10" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="10" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="10" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                        <Label left="120" top="120" width="100" height="100" backgroundColor="#D3D3D3"/>
                    </AbsoluteLayout>
                </ScrollView>
            </PullToRefresh>
        </TabViewItem>
    </TabView>
</template>

<script >
export default {
    data() {
        return {
            flat: true,
            selectedTab: 0,
            listOfItems: [
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                },
                {
                    text: 'test'
                }
            ]
        }
    },
    methods: {
        refreshList(args) {
            var pullRefresh = args.object;
            setTimeout(function() {
                pullRefresh.refreshing = false;
            }, 1000);
        },
        indexChange(args) {
            this.selectedTab = args.value
        }
    }
};
</script>

<style scoped>
    TabView {
        android-selected-tab-highlight-color: #444;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #000000;
    }
</style>
