<%@ include file="./init.jsp" %>


<%@page import="java.util.List"%>
<%@page import="com.student.model.Student"%>


<%@page import="com.liferay.portal.kernel.util.ListUtil"%>
<%@page import="com.student.service.StudentLocalServiceUtil"%>

<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>


<p>
	<h2>Welcome to Student Management System</h2>
</p>

<portlet:renderURL var="studentAddURL" >
  <portlet:param name="mvcRenderCommandName" value="addrender" /> 
 
 <%--  <portlet:param name="mvcPath" value="/addform.jsp"></portlet:param> --%>
  </portlet:renderURL>

<%
int total1=StudentLocalServiceUtil.getStudentsCount();
List<Student> studList =StudentLocalServiceUtil.getStudents(0,StudentLocalServiceUtil.getStudentsCount());
%>



<aui:button type="submit" cssClass="btn btn-primary" value="ADD STUDENT" onClick="${studentAddURL}" />

<liferay-ui:search-container total="<%=total1 %>" >
	<liferay-ui:search-container-results
		results="<%= studList %>"
		
	/>

	<liferay-ui:search-container-row
		className="com.student.model.Student"
		modelVar="student"
	>
<liferay-ui:search-container-column-text name="Student Id" property="studentId" />
   <liferay-ui:search-container-column-text name="Student Name" property="name" />
   <liferay-ui:search-container-column-text name="Student email" property="email" />
  <liferay-ui:search-container-column-text name="Stduent Education" property="education" />
  <liferay-ui:search-container-column-jsp name="Actions"
  path="/student/actiontab.jsp" />
  </liferay-ui:search-container-row>
		

	<liferay-ui:search-iterator />
</liferay-ui:search-container>