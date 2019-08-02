<template>
    <PullToRefresh @refresh="refreshList">
        <ScrollView dock="bottom" scrollBarIndicatorVisible="false">
            <StackLayout>
                <Label width="90%" class="searcbar" height="50" backgroundColor="#D3D3D3"/>
                <Label text="Category" class="m-25 subtitle"></Label>
                <ScrollView height="80" orientation="horizontal" scrollBarIndicatorVisible="false">
                    <GridLayout columns="auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto">
                        <Label width="70" height="70" class="h3 content-categories" col="0" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="1" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="2" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="3" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="4" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="5" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="6" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="7" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="8" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="9" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="10" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="11" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="12" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories" col="13" backgroundColor="#D3D3D3" />
                        <Label width="70" height="70" class="h3 content-categories-last" col="14" backgroundColor="#D3D3D3" />
                    </GridLayout>
                </ScrollView>
                <Label text="Nearby" class="m-25 subtitle"></Label>
                <ScrollView height="200" orientation="horizontal" scrollBarIndicatorVisible="false">
                    <GridLayout columns="auto auto auto auto">
                        <Label width="150" height="300" class="h3 content" col="0" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content" col="1" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content" col="2" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content-last" col="3" backgroundColor="#D3D3D3" />
                    </GridLayout>
                </ScrollView>
                <Label text="Latest" class="m-25 subtitle"></Label>
                <ScrollView height="200" orientation="horizontal" scrollBarIndicatorVisible="false">
                    <GridLayout columns="auto auto auto auto">
                        <Label width="150" height="300" class="h3 content" col="0" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content" col="1" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content" col="2" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content-last" col="3" backgroundColor="#D3D3D3" />
                    </GridLayout>
                </ScrollView>
                <Label text="Popular" class="m-25 subtitle"></Label>
                <ScrollView height="200" class="last" orientation="horizontal" scrollBarIndicatorVisible="false">
                    <GridLayout columns="auto auto auto auto">
                        <Label width="150" height="300" class="h3 content" col="0" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content" col="1" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content" col="2" backgroundColor="#D3D3D3" />
                        <Label width="150" height="300" class="h3 content-last" col="3" backgroundColor="#D3D3D3" />
                    </GridLayout>
                </ScrollView>
            </StackLayout>
        </ScrollView>
    </PullToRefresh>
</template>

<script >
export default {
    data() {
        return {
        }
    },
    methods: {
        refreshList(args) {
        var pullRefresh = args.object;
        setTimeout(function() {
            pullRefresh.refreshing = false;
        }, 1000);
        }
    }
};
</script>

<style scoped>
    ActionBar {
        background-color: #ffffff;
        color: #ffffff;
    }
    .title {
        vertical-align: center;
        text-align: left;
        font-weight: bold;
        font-size: 40;
        color: #444;
    }
    .subtitle {
        vertical-align: center;
        text-align: left;
        font-weight: bold;
        font-size: 25;
        color: #444;
        margin-top: 50;
    }
    .searcbar {
        margin-top: 20;
    }
    .content-categories {
        margin-left: 25;
        border-radius: 100;
    }
    .content-categories-last {
        margin-left: 25;
        margin-right: 25;
        border-radius: 100;
    }
    .content {
        margin-left: 25;
    }
    .content-last {
        margin-left: 25;
        margin-right: 25;
    }
    .last {
        margin-bottom: 25;
    }
</style>
