public with sharing class ContactHelper {
    public ContactHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static Contact getAContact(){
        try {
            return [SELECT Name, Phone, Email FROM Contact Where FirstName = 'John' LIMIT 1];
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