<template>
    <Page @loaded="pageLoaded" actionBarHidden="true" class="page">
    <ActionBar :flat="flat" class="action-bar">
        <ActionItem
            ios.systemIcon="16" ios.position="right"
            text="delete" android.position="popup" />
    </ActionBar>
        <TabView @selectedIndexChange="indexChange" androidTabsPosition="bottom" :flat="flat" class="tab-view">
            <TabViewItem :iconSource="selectedTab == 0 ? homeSelected : home">
                <home/>
            </TabViewItem>
            <TabViewItem :iconSource="selectedTab == 1 ? listSelected : list">
                <list/>
            </TabViewItem>
            <TabViewItem :iconSource="selectedTab == 2 ? giveSelected : give">
                <Label text="Label in Tab 2" />
            </TabViewItem>
            <TabViewItem :iconSource="selectedTab == 3 ? chatSelected : chat">
                <Label text="Label in Tab 2" />
            </TabViewItem>
            <TabViewItem :iconSource="selectedTab == 4 ? profileSelected : profile">
                <Label text="Label in Tab 2" />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script >
import Home from '@/components/Home'
import List from '@/components/List'
import * as app from 'tns-core-modules/application'
import * as platform from 'tns-core-modules/platform'
import * as color from 'tns-core-modules/color'

export default {
    components: {
        'home': Home,
        'list': List
    },
    data() {
        return {
            title: 'Home',
            flat: true,
            selectedTab: 0,
            home: 'res://outline_home_black_24',
            homeSelected: 'res://baseline_home_black_24',
            list: 'res://outline_view_list_black_24',
            listSelected: 'res://baseline_view_list_black_24',
            give: 'res://outline_add_box_black_24',
            giveSelected: 'res://baseline_add_box_black_24',
            chat: 'res://outline_forum_black_24',
            chatSelected: 'res://baseline_forum_black_24',
            profile: 'res://outline_person_black_24',
            profileSelected: 'res://baseline_person_black_24',
        }
    },
    methods: {
        pageLoaded() {
            if (app.android && platform.device.sdkVersion >= "21") {
                const window = app.android.foregroundActivity.getWindow();
                window.setStatusBarColor(new color.Color("#FFFFFF").android);
                var decorView = window.getDecorView();
                decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
            }
        },
        indexChange(args) {
            this.selectedTab = args.value
        }
    },
}
</script>

<style scoped>

</style>
