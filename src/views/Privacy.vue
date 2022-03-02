<script setup lang="ts">
import MainLayout from "../components/MainLayout.vue";
</script>

<template>
    <main-layout
        header="Privacy Policy"
        subtitle="Last Updated: September 26, 2021"
    >
        <p>
            This privacy policy governs all of UNISON Technologies’ applications
            and services. All services are provided at no cost and are intended
            for use as is.
        </p>

        <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Services.
        </p>

        <p>
            If you choose to use our Services, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Services. We will not use or share your information with anyone
            except as described in this Privacy Policy.
        </p>

        <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, unless otherwise defined in this Privacy
            Policy.
        </p>

        <p class="section-header">
            <strong>Information Collection and Use</strong>
        </p>

        <p>
            For a better experience, while using our Services, we may require
            you to provide us with certain personally identifiable information,
            including but not limited to your name and email address. The
            information that we request will be retained by us and used as
            described in this privacy policy.
        </p>

        <p>
            These Services use third-party services that may collect information
            used to identify you.
        </p>

        <div class="content">
            Link to the privacy policies of third-party service providers used
            by the Services:

            <ul class="mt-1 list-inside list-disc">
                <li>
                    <a
                        href="https://umami.is/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline pr-1"
                        >Umami</a
                    >
                    (an anonymous, open-source, privacy-focused analytics
                    platform)
                </li>
                <li>
                    <a
                        href="https://sentry.io/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline pr-1"
                        >Sentry</a
                    >
                    (an error-logging platform)
                </li>
            </ul>
        </div>

        <p class="section-header"><strong>Log Data</strong></p>

        <p>
            We want to inform you that whenever you use our Services, in a case
            of an error in the Services we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the Services, the time and date of your use of the Services, and
            other statistics.
        </p>

        <p class="section-header"><strong>Services Providers</strong></p>

        <div>
            We may employ third-party companies and individuals due to the
            following reasons:

            <ul class="mt-1 list-inside list-disc">
                <li>To facilitate our Services;</li>
                <li>To provide the Services on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Services is used.</li>
            </ul>
        </div>

        <p>
            We want to inform users of this Services that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
        </p>

        <p class="section-header"><strong>Security</strong></p>

        <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
        </p>

        <p class="section-header"><strong>Links to Other Sites</strong></p>

        <p>
            This Services may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
        </p>

        <p class="section-header"><strong>Children’s Privacy</strong></p>

        <p>
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13 years of age. In the event we discover that a child under
            13 has provided us with personal information, we will immediately
            delete this from our servers. If you are a parent or guardian and
            you are aware that your child has provided us with personal
            information, please contact us so that we will be able to do
            necessary actions.
        </p>

        <p class="section-header">
            <strong>Changes to This Privacy Policy</strong>
        </p>

        <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
        </p>

        <p class="section-header"><strong>Contact Us</strong></p>

        <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at
            <a
                href="mailto:support@unisontech.org?subject=Questions%20About%20the%20Privacy%20Policy"
                target="_blank"
                class="underline"
                >support@unisontech.org</a
            >.
        </p>
    </main-layout>
</template>

<style scoped>
p:not(:last-child):not(.section-header),
div.content:not(.section-header) {
    margin-bottom: 16px;
}
</style>
