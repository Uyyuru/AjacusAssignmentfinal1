<#-- Employee Grid Template -->
<#if employees?has_content>
    <#list employees as employee>
        <#include "employee-card.ftl">
    </#list>
<#else>
    <div class="no-employees">
        <p>No employees found matching your criteria.</p>
    </div>
</#if>