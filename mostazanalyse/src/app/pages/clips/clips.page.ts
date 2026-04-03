import { Component } from "@angular/core";

export interface StreamerTheque {
    streamer: string
    clips: string[]
}

@Component({
    selector: 'clips-page',
    styleUrls : ["clips.page.scss"],
    template: `
    
<section class="section thin">
    <div class="container">
        <h1>Bienvenue !</h1>
        <p>Voici tout les clips sur lesquels j'ai pu mettre la main ! HF.</p>
    </div>
</section>

<section class="section streamer-teque">
    <div class="container" style="max-width: 1000px;">
    @for (t of streamerTheques; track t.streamer) {
        <div class="streamer-block">
            <h4>{{t.streamer}}</h4>
            @for (l of t.clips; track l) {
                <a class="button" [href]="l">Voir le clip</a>
            }
        </div>
    }
    </div>
</section>
        
    `,
    standalone: true,

})
export class ClipsPage {

    streamerTheques: StreamerTheque[] = [
        {
            streamer: "Zakium",
            clips: [
                "https://www.twitch.tv/zakium/clip/PricklyEndearingKuduPlanking-mXDfKtCV3wy492TK",
                "https://www.twitch.tv/zakium/clip/LitigiousVibrantWaterFailFish-o6uHStGsgl7Dk3Rb",
                "https://www.twitch.tv/zakium/clip/LazyTangentialSnakeDancingBaby-pqZLXdWCGkU3pXzW",
                "https://www.twitch.tv/zakium/clip/SingleSeductiveNightingaleAMPEnergyCherry-vM2bVaDiXZ8GvnEk",
                "https://www.twitch.tv/zakium/clip/LitigiousVibrantWaterFailFish-o6uHStGsgl7Dk3Rb"
            ]
        },
        {
            streamer: "Loup_MP4",
            clips: [
                "https://www.twitch.tv/loup_mp4/clip/InventiveYummyCurlewBleedPurple-G83puGKJnlCcOkz2",
                "https://www.twitch.tv/loup_mp4/clip/AntediluvianSpineySquirrelVoHiYo-iuFjtSYDhOeZlRPp",
                "https://www.twitch.tv/loup_mp4/clip/FancyMotionlessAlpacaAMPTropPunch-_F7AAE2hIuWmWWZ0"
            ]
        },
        {
            streamer: "Bubuchenbois",
            clips: [
                "https://www.twitch.tv/bubuchenbois/clip/CoySlipperyCardNononoCat-GY0kR_bNiWtct0mm",
                "https://www.twitch.tv/bubuchenbois/clip/PiliableAverageScorpionKappaPride-LriMQQeKOs7UgzQ0",
                "https://www.twitch.tv/bubuchenbois/clip/CuriousCleverPigPlanking-QW54z2KZZ_qZ8CgP"
            ]
        },
        {
            streamer: "Le J",
            clips: [
                "https://www.twitch.tv/jimauve/clip/BeautifulAstuteDragonfruitTBTacoLeft-3TqemEsDMioNmP7w"
            ]
        },
        {
            streamer: "Kapacino",
            clips: [
                "https://www.twitch.tv/kapacino/clip/HungryConcernedWoodcockBabyRage-QeueVgp0IDRYAaIu"
            ]
        },
        {
            streamer: "Stera UwU",
            clips: [
                "https://www.twitch.tv/meonstera/clip/SpookyRespectfulTapirPipeHype-4fIeGB0iLRWScKY1"
            ]
        },
        {
            streamer: "Luucy",
            clips: [
                "https://www.twitch.tv/luucy_/clip/KitschyEnthusiasticDootNerfBlueBlaster-YrLcKT_Rg4NRa24Q",
                "https://www.twitch.tv/luucy_/clip/RoundJollyNewtJebaited-bXBj85RwnZ8yUYxS"
            ]
        }
    ].sort((lhs, rhs) => lhs.streamer.localeCompare(rhs.streamer))

}