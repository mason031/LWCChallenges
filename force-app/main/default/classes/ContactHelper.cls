public with sharing class ContactHelper {
    public ContactHelper() {

    }

    @AuraEnabled()
    public static Contact getAContact(String name){
        try {
            String query = '%' + name + '%';
            return [SELECT Name, Phone, Email FROM Contact Where FirstName LIKE :query LIMIT 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable = true)
    public static Contact getContact(String id){
        try {
            
            return [SELECT Name, Phone, Email FROM Contact WHERE Id=:id];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}